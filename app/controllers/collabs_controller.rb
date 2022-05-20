class CollabsController < ApplicationController
    def index
        if params.include?(:user_id) then
            user_collabs = Collab.where("collaborator_a_id = ? OR collaborator_b_id = ?", params[:user_id],params[:user_id])
            render json: user_collabs, status: :ok
        end
    end

    def create
        new_collab = Collab.create!(collab_params)
        render json: new_collab, status: :ok
    end

    private
    def collab_params
        params.permit(:collaborator_a_id,:collaborator_b_id)
    end
end
