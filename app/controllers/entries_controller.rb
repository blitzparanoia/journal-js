class EntriesController < ApplicationController

  def index
    @entries = Entry.all.order("created_at DESC")
    # respond_to do |f|
    #   f.html { render :index }
    #   f.json { render json: @entries }
    # end
  end

  def new
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      # respond_to do |f|
        # f.html { redirect_to entries_path }
        render json: @entry, status:201
      else
      render 'new'
    end

  end

  def edit
    set_entry
  end

  def update
    set_entry
    if @entry.update(entry_params)
      redirect_to @entry
    else
      render 'edit'
    end

  end

  def show
    set_entry
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @entry}
    end
  end

  def destroy
    set_entry
    @entry.destroy

    redirect_to entries_path
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :content, :mood)
  end

  def set_entry
    @entry = Entry.find(params[:id])
  end

end
