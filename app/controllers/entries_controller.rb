class EntriesController < ApplicationController

  def index
  end

  def new
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      redirect_to @entry
    else
      render 'new'
    end

  end

  def edit
    set_entry
  end

  def update
    set_entry
  end

  def show
    set_entry
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :content, :mood)
  end

  def set_entry
    @entry = Entry.find(params[:id])
  end

end
