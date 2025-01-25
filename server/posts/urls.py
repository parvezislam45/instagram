from django.urls import path
from .views import PostListCreateView, PostDetailView, CommentCreateView, LikeCreateView

urlpatterns = [
    path('', PostListCreateView.as_view(), name='post-list'),
    path('<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('<int:post_pk>/comments/', CommentCreateView.as_view(), name='comment-create'),
    path('<int:post_pk>/likes/', LikeCreateView.as_view(), name='like-create'),
]
