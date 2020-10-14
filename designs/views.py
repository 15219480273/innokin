from django.shortcuts import redirect
from django.http import Http404, HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView, View, CreateView, TemplateView, DetailView

from .models import Design
from .forms import DesignForm
from .utils import decode_base64


# Create your views here.
# @login_required
def design_create(request):
    if request.method == "POST":
        # user = request.user
        # designs = Design.objects.filter(author=user)
        # print("designs", len(designs))
        # if len(designs) >= 1:
        #     # https://httpstatuses.com/409
        #     return JsonResponse(
        #         {"message": "Only one design per user allowed."}, status=409
        #     )
        form = DesignForm(request.POST)
        if form.is_valid():
            image_base64 = request.POST.get("design_image")
            design = Design(
                # author=user,
                design_image=decode_base64(image_base64),
            )
            design.save()
            print('design object', design.id)
        return JsonResponse({"message": "Design created.", "designId": design.id}, status=201)
    return Http404()


@login_required
def associate_design(request, pk):
    user = request.user

    try:
        design = Design.objects.get(pk=pk)
        design.author = user
        design.save()
    except Design.DoesNotExist:
        raise Http404('Design does not exist')
    return redirect('home')


class DesignEditView(LoginRequiredMixin, DetailView):
    model = Design
    template_name = "design/design-edit.html"


class DesignCreateView(CreateView):
    template_name = "design/design-create.html"
    model = Design
    fields = ["author", "design_image"]
    success_url = "design/list"


class ListOfDesignsView(ListView):
    template_name = "design/list_of_designs.html"
    model = Design


class DesignVoteView(LoginRequiredMixin, View):
    def post(self, request, pk):
        user = self.request.user
        form = DesignForm(request.POST)

        if form.is_valid():
            design = Design.objects.get(pk=pk)
            design.votes.up(user.id)
            return redirect("list-of-designs")

    def get(self, request, pk):
        user = self.request.user
        form = DesignForm(request.POST)

        if form.is_valid():
            design = Design.objects.get(pk=pk)
            design.votes.up(user.id)
            return redirect("list-of-designs")
