from rest_framework import permissions


SAFE_METHODS = permissions.SAFE_METHODS
ADMIN_ROLES = {"ADMIN"}
MODERATION_ROLES = {"MODERATOR", "ADMIN"}
CONTENT_AUTHOR_ROLES = {"CREATOR", "MODERATOR", "ADMIN"}


def has_admin_access(user):
    return bool(
        user
        and user.is_authenticated
        and (user.is_staff or user.is_superuser or getattr(user, "role", None) in ADMIN_ROLES)
    )


def has_moderation_access(user):
    return bool(
        user
        and user.is_authenticated
        and (user.is_staff or user.is_superuser or getattr(user, "role", None) in MODERATION_ROLES)
    )


class IsAdminRoleOrReadOnly(permissions.BasePermission):
    """
    Lecture publique, écriture réservée aux admins/staff/superusers.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return has_admin_access(request.user)


class IsContentActorOrReadOnly(permissions.BasePermission):
    """
    Permissions des contenus MIANARA :
    - lecture publique ;
    - création réservée CREATOR/MODERATOR/ADMIN/staff/superuser ;
    - modification/suppression réservée à l'auteur ou aux modérateurs/admins.
    Les transitions de statut sont validées dans le serializer/vue.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        user = request.user
        if not (user and user.is_authenticated):
            return False

        if user.is_staff or user.is_superuser:
            return True

        if request.method == "POST":
            return getattr(user, "role", None) in CONTENT_AUTHOR_ROLES

        return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        user = request.user
        if not (user and user.is_authenticated):
            return False

        return bool(
            has_moderation_access(user)
            or obj.author_id == user.id
        )


# Alias conservé pour compatibilité avec les imports existants/cherry-picks.
IsCreatorOrAdminForCreateAuthorOrAdminForObject = IsContentActorOrReadOnly
