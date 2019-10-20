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
  end

  def update
  end

  def show
  end

  private

  def entry_params
    params.require(:entry).permit(:title, :content, :mood)
  end

end
