from django.urls import path

from .views import (
    ListOfDesignsView,
    DesignVoteView,
    DesignCreateView,
    DesignEditView,
    design_create,
    associate_design,
)

urlpatterns = [
    path(route="list", view=ListOfDesignsView.as_view(), name="list-of-designs"),
    path(route="<str:pk>/vote", view=DesignVoteView.as_view(), name="design-vote"),
    path(route="create", view=DesignCreateView.as_view(), name="design-create"),
    path(route="<str:pk>/edit", view=DesignEditView.as_view(), name="design-edit"),
    path(route="<str:pk>/finish", view=associate_design, name="design-finish"),
    path(route="create-test", view=design_create, name="design-create-test"),
]
