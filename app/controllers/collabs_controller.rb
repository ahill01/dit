class CollabsController < ApplicationController
    def index
        if params.include?(:user_id) then
            collabs = Collab.where("collaborator_a_id = ? OR collaborator_b_id = ?", params[:user_id],params[:user_id])
            render json: collabs, status: :ok
        end
    end
end
