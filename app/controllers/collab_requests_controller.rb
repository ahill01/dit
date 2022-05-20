class CollabRequestsController < ApplicationController

    def index
        if params.include?(:user_id) then
            requests = CollabRequest.where("requester_id = ? OR reciever_id = ?", params[:user_id],params[:user_id])
            render json: requests, status: :ok
        end
    end
end
