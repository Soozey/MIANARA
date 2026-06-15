from rest_framework import permissions


SAFE_METHODS = permissions.SAFE_METHODS


class IsAdminRoleOrReadOnly(permissions.BasePermission):
    """
    Allow public read access, but reserve writes to staff/superusers or
    authenticated users carrying the ADMIN platform role.
    """

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        user = request.user
        return bool(
            user
            and user.is_authenticated
            and (
                user.is_staff
                or user.is_superuser
                or getattr(user, "role", None) == "ADMIN"
            )
        )


class IsCreatorOrAdminForCreateAuthorOrAdminForObject(permissions.BasePermission):
    """
    Content permissions:
    - reads are public;
    - creates require CREATOR/ADMIN or Django staff/superuser;
    - updates/deletes are limited to the content author or admins.
    """

    creator_roles = {"CREATOR", "ADMIN"}

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        user = request.user
        if not (user and user.is_authenticated):
            return False

        if user.is_staff or user.is_superuser:
            return True

        if request.method == "POST":
            return getattr(user, "role", None) in self.creator_roles

        return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        user = request.user
        if not (user and user.is_authenticated):
            return False

        return bool(
            user.is_staff
            or user.is_superuser
            or getattr(user, "role", None) == "ADMIN"
            or obj.author_id == user.id
        )
