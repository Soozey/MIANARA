@echo off
chcp 65001 >nul
echo ========================================
echo   Demarrage de MIANARA Platform
echo ========================================
echo.

REM ===== VERIFICATION ET PREPARATION DU BACKEND =====
echo [1/4] Verification du backend Django...
cd /d "%~dp0backend"

REM Verifier si l'environnement virtuel existe
if not exist "venv\Scripts\activate.bat" (
    echo.
    echo [!] Environnement virtuel non trouve. Creation en cours...
    python -m venv venv
    if errorlevel 1 (
        echo [ERREUR] Impossible de creer l'environnement virtuel.
        echo Assurez-vous que Python est installe correctement.
        pause
        exit /b 1
    )
    echo [OK] Environnement virtuel cree avec succes.
)

REM Activer l'environnement virtuel et verifier les dependances
echo [2/4] Activation de l'environnement virtuel et verification des dependances...
call venv\Scripts\activate.bat

REM Verifier si Django est installe
python -c "import django" 2>nul
if errorlevel 1 (
    echo.
    echo [!] Dependances Django manquantes. Installation en cours...
    pip install -r requirements.txt 2>nul
    if not exist requirements.txt (
        echo [!] Fichier requirements.txt non trouve. Installation de Django...
        pip install django djangorestframework django-cors-headers pillow django-filter
    )
    echo [OK] Dependances Django installees.
) else (
    echo [OK] Django est deja installe.
)

REM ===== VERIFICATION ET PREPARATION DE L'API NODE =====
echo.
echo [3/5] Verification de l'API Node.js...
cd /d "%~dp0"

REM Verifier si node_modules existe a la racine
if not exist "node_modules" (
    echo.
    echo [!] Dependances API manquantes. Installation en cours...
    call npm install
    if errorlevel 1 (
        echo [ERREUR] Impossible d'installer les dependances API.
        pause
        exit /b 1
    )
    echo [OK] Dependances API installees.
) else (
    echo [OK] Dependances API deja installees.
)

REM ===== VERIFICATION ET PREPARATION DU FRONTEND =====
echo.
echo [4/5] Verification du frontend React...
cd /d "%~dp0frontend"

REM Verifier si node_modules existe
if not exist "node_modules" (
    echo.
    echo [!] Dependances npm manquantes. Installation en cours...
    echo    (Cela peut prendre quelques minutes...)
    call npm install
    if errorlevel 1 (
        echo [ERREUR] Impossible d'installer les dependances npm.
        echo Assurez-vous que Node.js et npm sont installes correctement.
        pause
        exit /b 1
    )
    echo [OK] Dependances npm installees avec succes.
) else (
    echo [OK] Dependances npm deja installees.
)

REM ===== DEMARRAGE DES SERVEURS =====
echo.
echo [5/5] Demarrage des serveurs...
echo.

REM Demarrer le backend Django avec l'environnement virtuel active
echo ^> Preparation et demarrage du backend Django...
start "MIANARA - Backend (Django)" cmd /k "cd /d "%~dp0backend" && call venv\Scripts\activate.bat && echo Execution des migrations... && python manage.py migrate && echo Demarrage du serveur... && python manage.py runserver"

REM Demarrer l'API Node.js
echo ^> Demarrage de l'API Node.js...
start "MIANARA - API (Node)" cmd /k "cd /d "%~dp0" && npm start"

REM Attendre 3 secondes pour laisser les backends demarrer
timeout /t 3 /nobreak >nul

REM Demarrer le frontend React/Vite
echo ^> Demarrage du frontend React...
start "MIANARA - Frontend (React)" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo.
echo ========================================
echo   MIANARA Platform demarre avec succes !
echo ========================================
echo.
echo   Backend Django  : http://localhost:8000
echo   API Node.js     : http://localhost:3000
echo   Frontend React  : http://localhost:5173
echo.
echo   Les serveurs sont en cours d'execution dans
echo   des fenetres separees.
echo.
echo   Pour arreter les serveurs, fermez les
echo   fenetres ou appuyez sur Ctrl+C dans chacune.
echo ========================================
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
