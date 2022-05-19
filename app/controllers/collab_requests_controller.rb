class CollabRequestsController < ApplicationController

    def index
        byebug
        if params.include?(:user_id) then
            puts("inside loop")
            requests = CollabRequest.where("requester_id = ? OR reciever_id = ?", params[:user_id],params[:user_id])
            byebug
            render json: requests, status: :ok
        end
    end
end
