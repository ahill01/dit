class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.create!(new_user_params)
        render json: user, status: :created
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user 
           user.update(user_params)
           render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def show_loggedin_user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :name, :gender, :pronouns, :collab_type, :genre, :remote, :homebase, :bio)
    end

    def new_user_params
        params.permit(:username, :email, :password)
    end

end
