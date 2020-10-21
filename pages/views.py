from django.db.models import Q
from django.views.generic import ListView

from designs.models import Design


# Create your views here.
class HomePageView(ListView):
    template_name = "home.html"
    model = Design

    def get_queryset(self):
        q = self.request.GET.get("q")
        queryset = super().get_queryset()

        print("q", q)

        if q == "popular":
            return queryset.order_by("-vote_score")

        return queryset.order_by("-created_at")
