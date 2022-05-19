class CollabRequestsController < ApplicationController

    def index
        if params.include?(:user_id) do
            reqests = CollabRequest.where("collaborator_a_id = ? OR collaborator_b = ?", params[:user_id])
            render json: requests, status: :ok
        end
    end
end
