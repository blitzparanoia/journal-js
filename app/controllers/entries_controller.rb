class EntriesController < ApplicationController

  def index
  end

  def new
    @entries = Entry.new
  end

  def create
  end

end
