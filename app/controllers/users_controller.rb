class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :accepted
    end

    def show_loggedin_user
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
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
        params.permit(:usernme, :name, :password, :gender, :pronouns, :collab_type)
    end

end
