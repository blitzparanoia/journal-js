class CommentsController < ApplicationController

  def new
    @entry = Entry.find(params[:entry_id])
    @comment = @entry.comments.build
  end

  def create
    @entry = Entry.find(params[:entry_id])
    @comment = @entry.comments.build
    if @comment.update(comment_params)
      redirect_to entry_path(@entry)
  end

  def destroy
    set_comment
    @comment.delete
    redirect_to comments_path
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :entry_id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

end
