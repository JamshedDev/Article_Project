from django.shortcuts import render
from myapp.models import Article

# Create your views here.


def home_view(request):
    type='HomePage'
    return render(request,'home.html',{'type':type})

def form_view(request):
    type='Fill The Form'
    submitted=False
    if request.method=='POST':
        Title_data=request.POST.get('title_data')
        description_data=request.POST.get('description_data')
        author_data=request.POST.get('author_data')
        date_data=request.POST.get('date_data')
        Article.objects.create(title=Title_data,description=description_data,author=author_data,date=date_data)
        submitted=True
    return render(request,'form.html',{'submitted':submitted,'type':type})

def all_article_view(request):
    type='All The Articles'
    all_data=Article.objects.all()

    return render(request,'article.html',{'all_data':all_data,'type':type})

# def specific_article_view(request):
#     type='Specific Article'
#     return render(request,'specific_article.html',{'type':type})


def specific_article_view(request):
    type='Specific Article'
    query = request.GET.get('q')
    results = []

    if query:
        results = Article.objects.filter(
            title__icontains=query
        ) | Article.objects.filter(
            author__icontains=query
        )
    return render(request, 'specific_article.html', {'results': results, 'query': query, 'type': type})