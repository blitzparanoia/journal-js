class SessionsController < ApplicationController

def home
end

def new
  @user = User.new
end

def create
  @user = User.find_by(username: params[:user][:username])
  if @user && @user.authenticate(params[:user][:password])
    session[:user_id] = @user.id
    redirect_to entries_path
  else
     flash[:error] = "Username or password was incorrect"
    redirect_to '/login'
  end
end


def destroy
  session.clear
  flash[:success] = "Successfully Logged Out!"
  redirect_to '/'
end


end
