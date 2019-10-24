class CommentsController < ApplicationController
before_action :authenticate_user!
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

      respond_to do |format|
				format.html {render partial: 'comments/ajax_comments', locals: { comments: @comments, entry: @entry}}
				format.json {render json: @comments}
			end

		else
			@comments = Comment.all
      respond_to do |f|
				f.html {render :index}
				f.json {render json: @comments}
			end
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
         respond_to do |format|
				format.html {redirect_to entry_path(@entry)}
				format.json {render json: @comment}
			end
  else
    render :new
  end
end

    def show
      @comment = Comment.find(id: params[:id])
      respond_to do |f|
			f.html {render :show}
			f.json {render json: @comment}
		end
    end









private
		def comment_params
			params.require(:comment).permit(:entry_id, :content)
		end

end
