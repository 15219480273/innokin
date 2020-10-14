from django.views.generic import TemplateView, ListView

from designs.models import Design


# Create your views here.
class HomePageView(ListView):
    template_name = "home.html"
    model = Design

