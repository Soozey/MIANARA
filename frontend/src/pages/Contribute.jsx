import { useState, useEffect } from "react"; // Added useEffect
import { contentService } from "../services/contentService";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Stepper from "../components/Stepper";
import RichTextEditor from "../components/RichTextEditor";
import FileUploader from "../components/FileUploader";
import SuccessModal from "../components/SuccessModal";

export default function Contribute() {
  const [step, setStep] = useState(1);
  const location = useLocation(); // Hook
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    file_type: "",
    body: "",
    file_url: null,
    is_monetized: false,
    license_accepted: false,
  });

  useEffect(() => {
    if (location.state?.editMode && location.state?.article) {
      const { article } = location.state;
      setIsEditing(true);
      setEditId(article.id);
      setFormData({
        title: article.title || "",
        description: article.description || "",
        category: article.category || "",
        file_type: article.file_type || "TEXT",
        body: article.body || "",
        file_url: null, // Files might need re-upload usually
        is_monetized: article.is_premium || false,
        license_accepted: true // Already accepted if modifying
      });
    }
  }, [location.state]);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  // New Step Labels
  const steps = ["Qualification", "Informations", "Contenu", "Finalisation"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRichTextChange = (content) => {
    setFormData({ ...formData, body: content });
  };

  const handleFileSelect = (file) => {
    setFormData({ ...formData, file_url: file });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Validation Logic
  const isStepValid = () => {
    switch (step) {
      case 1: // Qualification
        return formData.category && formData.file_type;
      case 2: // Informations
        return formData.title.trim().length > 3 && formData.description.trim().length > 10;
      case 3: // Contenu
        if (formData.file_type === 'TEXT') {
          return formData.body.trim().length > 20; // Minimum content length
        } else {
          return formData.file_url !== null;
        }
      case 4: // Finalisation
        return formData.license_accepted;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!formData.license_accepted) {
      setMessage("❌ Vous devez accepter la licence pour publier.");
      return;
    }

    setMessage("");
    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("file_type", formData.file_type);
      data.append("body", formData.body);
      data.append("is_monetized", formData.is_monetized);
      data.append("license_accepted", formData.license_accepted);

      if (formData.file_url) {
        data.append("file_url", formData.file_url);
      }

      if (formData.file_url) {
        data.append("file_url", formData.file_url);
      }

      if (isEditing) {
        await contentService.update(editId, data);
      } else {
        await contentService.create(data);
      }

      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
      let errorMsg = "Échec de l'envoi";
      if (err.response?.data) {
        const errors = err.response.data;
        if (typeof errors === 'object') {
          errorMsg = Object.entries(errors).map(([key, val]) => `${key}: ${val}`).join(', ');
        } else {
          errorMsg = errors.detail || errors;
        }
      }
      setMessage("❌ Erreur : " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-2xl shadow-xl mt-4 md:mt-8 border border-gray-100">
      <SuccessModal
        isOpen={showSuccessModal}
        title="Félicitations ! 🎉"
        message="Votre contenu a été soumis avec succès. Il est maintenant en cours de validation par notre équipe."
        actions={
          <>
            <button
              onClick={() => navigate('/library')}
              className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
            >
              Voir la bibliothèque
            </button>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              Proposer un autre contenu
            </button>
          </>
        }
      />

      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-10 text-center text-gray-900 tracking-tight">📝 Proposer un contenu</h2>

      <Stepper currentStep={step} steps={steps} />

      <div className="mt-6 md:mt-10 min-h-[400px]">
        {/* STEP 1: QUALIFICATION */}
        {step === 1 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-6">
              {/* File Type Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">1. Quel type de contenu ?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { id: "TEXT", label: "Article", icon: "📝", desc: "Texte riche & images" },
                    { id: "VIDEO", label: "Vidéo", icon: "🎬", desc: "MP4, WebM" },
                    { id: "AUDIO", label: "Audio", icon: "🎧", desc: "MP3, Podcast" },
                    { id: "PDF", label: "Document", icon: "📄", desc: "PDF téléchargeable" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, file_type: type.id })}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${formData.file_type === type.id
                        ? "border-primary-600 bg-primary-50 shadow-md ring-1 ring-primary-600 transform scale-[1.02]"
                        : "border-gray-100 bg-white hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <div className={`font-bold ${formData.file_type === type.id ? "text-primary-900" : "text-gray-700"}`}>
                        {type.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">2. Dans quelle catégorie ?</label>

                {/* Level 1: Main Category */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                  {[
                    { id: "SCOLAIRE", label: "Espace Étudiant", icon: "🎓", hasSub: true },
                    { id: "ORIENTATION", label: "Orientation & Carrière", icon: "🧭", hasSub: false },
                    { id: "ENTREPRENEURIAT", label: "Entrepreneuriat", icon: "💼", hasSub: true },
                    { id: "PRO", label: "Formations", icon: "🛠️", hasSub: true },
                    { id: "PERSO", label: "Dév. Personnel", icon: "🌱", hasSub: false },
                    { id: "CITOYEN", label: "Citoyenneté", icon: "🏛️", hasSub: false },
                    { id: "SANTE", label: "Santé & Bien-être", icon: "🏥", hasSub: false },
                    { id: "SOCIAL", label: "Société & Culture", icon: "🌍", hasSub: false },
                    { id: "AUTRE", label: "Divers", icon: "📌", hasSub: false },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFormData({ ...formData, category: cat.id, subCategory: null })}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all duration-200 ${(formData.category === cat.id || (
                        ["LYCEE", "COLLEGE", "PRIMAIRE"].includes(formData.category) && cat.id === "SCOLAIRE"
                      ) || (
                          ["CREATION", "GESTION", "MARKETING"].includes(formData.category) && cat.id === "ENTREPRENEURIAT"
                        ) || (
                          ["INFORMATIQUE", "COMMERCE", "AGRI"].includes(formData.category) && cat.id === "PRO"
                        ))
                        ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md transform scale-105"
                        : "border-gray-100 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                      <span className="text-3xl">{cat.icon}</span>
                      <span className="text-xs font-bold text-center">{cat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Level 2: Subcategories (Conditional) */}
                {/* SCOLAIRE SUBS */}
                {(formData.category === "SCOLAIRE" || ["LYCEE", "COLLEGE", "PRIMAIRE"].includes(formData.category)) && (
                  <div className="animate-fadeIn p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <label className="block text-xs font-bold text-blue-800 mb-2 uppercase">Niveau Scolaire</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "LYCEE", label: "Lycée (2nde - Tale)" },
                        { id: "COLLEGE", label: "Collège (6ème - 3ème)" },
                        { id: "PRIMAIRE", label: "Primaire" }
                      ].map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => setFormData({ ...formData, category: sub.id })}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${formData.category === sub.id
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                            }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ENTREPRENEURIAT SUBS */}
                {(formData.category === "ENTREPRENEURIAT" || ["CREATION", "GESTION", "MARKETING"].includes(formData.category)) && (
                  <div className="animate-fadeIn p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <label className="block text-xs font-bold text-amber-800 mb-2 uppercase">Thématique Business</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "CREATION", label: "Création d'entreprise" },
                        { id: "GESTION", label: "Gestion & Finance" },
                        { id: "MARKETING", label: "Marketing & Vente" }
                      ].map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => setFormData({ ...formData, category: sub.id })}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${formData.category === sub.id
                            ? "bg-amber-600 text-white border-amber-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-amber-300"
                            }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRO SUBS */}
                {(formData.category === "PRO" || ["INFORMATIQUE", "COMMERCE", "AGRI"].includes(formData.category)) && (
                  <div className="animate-fadeIn p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <label className="block text-xs font-bold text-purple-800 mb-2 uppercase">Secteur Professionnel</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "INFORMATIQUE", label: "Informatique & Digital" },
                        { id: "COMMERCE", label: "Commerce & Services" },
                        { id: "AGRI", label: "Agriculture & Élevage" }
                      ].map(sub => (
                        <button
                          key={sub.id}
                          onClick={() => setFormData({ ...formData, category: sub.id })}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${formData.category === sub.id
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"
                            }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* STEP 2: INFORMATIONS */}
        {step === 2 && (
          <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Title Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Titre du contenu</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-lg shadow-sm placeholder-gray-400 ${formData.title.trim().length > 0 && formData.title.trim().length < 3 ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  placeholder="Ex: Les bases de la comptabilité..."
                />
                {formData.title.trim().length > 0 && formData.title.trim().length < 3 && (
                  <p className="text-red-500 text-xs mt-1">Le titre doit contenir au moins 3 caractères.</p>
                )}
              </div>

              {/* Description Input */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Description courte</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full p-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm placeholder-gray-400 ${formData.description.trim().length > 0 && formData.description.trim().length < 10 ? "border-red-300 bg-red-50" : "border-gray-200"
                    }`}
                  placeholder="Résumé de votre contenu (sera visible dans la bibliothèque)..."
                />
                {formData.description.trim().length > 0 && formData.description.trim().length < 10 && (
                  <p className="text-red-500 text-xs mt-1">La description doit contenir au moins 10 caractères.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CONTENU */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            {formData.file_type === 'TEXT' ? (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Rédigez votre article</label>
                <RichTextEditor content={formData.body} onChange={handleRichTextChange} />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Importez votre fichier</label>
                <FileUploader onFileSelect={handleFileSelect} selectedFile={formData.file_url} />
              </div>
            )}
          </div>
        )}

        {/* STEP 4: FINALISATION */}
        {step === 4 && (
          <div className="space-y-8 animate-fadeIn">

            {/* Summary Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">📄 Récapitulatif</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Titre :</span> <span className="font-semibold text-gray-900">{formData.title}</span></div>
                <div><span className="text-gray-500">Catégorie :</span> <span className="font-semibold text-gray-900">{formData.category}</span></div>
                <div><span className="text-gray-500">Type :</span> <span className="font-semibold text-gray-900">{formData.file_type}</span></div>
                <div><span className="text-gray-500">Fichier/Contenu :</span> <span className="font-semibold text-gray-900">{formData.file_type === 'TEXT' ? 'Texte rédigé' : formData.file_url?.name}</span></div>
              </div>
            </div>

            {/* Monetization */}
            <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
              <h4 className="font-bold text-primary-900 mb-3 text-lg">💰 Option de Rémunération</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <label className={`flex items-center cursor-pointer p-3 rounded-xl border shadow-sm transition-all ${!formData.is_monetized ? 'bg-white border-primary-500 ring-1 ring-primary-500' : 'bg-white/50 border-primary-100 hover:border-primary-300'}`}>
                  <input
                    type="radio"
                    name="is_monetized"
                    checked={!formData.is_monetized}
                    onChange={() => setFormData({ ...formData, is_monetized: false })}
                    className="form-radio h-5 w-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Contenu Bénévole (Gratuit)</span>
                </label>
                <label className={`flex items-center cursor-pointer p-3 rounded-xl border shadow-sm transition-all ${formData.is_monetized ? 'bg-white border-primary-500 ring-1 ring-primary-500' : 'bg-white/50 border-primary-100 hover:border-primary-300'}`}>
                  <input
                    type="radio"
                    name="is_monetized"
                    checked={formData.is_monetized}
                    onChange={() => setFormData({ ...formData, is_monetized: true })}
                    className="form-radio h-5 w-5 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700 font-medium">Contenu Rémunéré (Premium)</span>
                </label>
              </div>
            </div>

            {/* License */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="license_accepted"
                  checked={formData.license_accepted}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-primary-600 mt-1 rounded focus:ring-primary-500"
                />
                <span className="ml-3 text-sm text-gray-600 leading-relaxed">
                  Je certifie être l'auteur de ce contenu et j'accepte les <a href="#" className="text-primary-600 underline hover:text-primary-700">Conditions Générales d'Utilisation</a> de Mianàra. J'accorde à Mianàra une licence non-exclusive de diffusion.
                </span>
              </label>
            </div>
          </div>
        )}

        {message && !showSuccessModal && (
          <div className={`mt-6 p-4 rounded-xl text-center font-bold shadow-sm ${message.includes("✅") ? "bg-teal-50 text-teal-700 border border-teal-100" : "bg-red-50 text-red-700 border border-red-100"}`}>
            {message}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between pt-6 border-t border-gray-100 sticky bottom-0 bg-white p-4 md:static md:p-0 z-10">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Précédent
            </button>
          )}
          {step < 4 ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`ml-auto px-8 py-3 rounded-xl font-bold transition-all shadow-lg ${isStepValid()
                ? "bg-primary-600 text-white hover:bg-primary-700 shadow-primary-200 hover:shadow-primary-300 hover:-translate-y-0.5"
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                }`}
            >
              Suivant
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading || !isStepValid()}
              className={`ml-auto px-10 py-3 rounded-xl text-white font-bold shadow-lg transition-all ${loading || !isStepValid() ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600 shadow-teal-200 hover:shadow-teal-300 hover:-translate-y-0.5"
                }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi...
                </span>
              ) : "Confirmer et Envoyer"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
