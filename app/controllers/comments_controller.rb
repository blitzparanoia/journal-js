class CommentsController < ApplicationController

  # def create
  # 		@entry = Entry.find(params[:entry_id])
  # 	 	@comment = @entry.comments.create(params[:comment].permit(:comment))
  # 		redirect_to entry_path(@entry)
  # 	end
  #
  # 	def destroy
  # 		@entry = Entry.find(params[:entry_id])
  # 		@comment = @entry.comments.find(params[:id])
  # 		@comment.destroy
  # 		redirect_to entry_path(@entry)
  # 	end

  def index
    if params[:entry_id]
			@entry = Entry.find(params[:entry_id])
			@comments = Comment.all.where(entry_id: params[:entry_id])

		else
			@comments = Comment.all
	end
  end

    def new
      @entry = Entry.find(params[:entry_id])
      @comment = @entry.comments.build
    end

    def create
      @entry = Entry.find(params[:entry_id])
      @comment = @entry.comments.build
      if @comment.update(comment_params)
         redirect_to entry_path(@entry)
  else
    render :new
  end
end

    def show
      @comment = Comment.find(id: params[:id])
    end









private
		def comment_params
			params.require(:comment).permit(:entry_id, :content)
		end

end
