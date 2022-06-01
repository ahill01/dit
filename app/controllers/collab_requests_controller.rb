class CollabRequestsController < ApplicationController

    def index
        if params.include?(:user_id) then
            all_requests = CollabRequest.where("reciever_id = ? or requester_id = ?", params[:user_id],params[:user_id])
            render json: all_requests, status: :ok
        end
    end

    def pending_index
        if params.include?(:user_id) then
            pending_req = CollabRequest.where("requester_id = ? and accepted = ?",params[:user_id],false)
           render json: pending_req, status: :ok
        end
    end

    def recieved_index
        if params.include?(:user_id) then
            rec_requests = CollabRequest.where("reciever_id = ? and accepted = ?", params[:user_id],false)
           render json: rec_requests, status: :ok
        end
    end

    def destroy
        byebug;
        deleted_req = CollabRequest.find(params[:id])
        deleted_req.destroy
        render json: deleted_req, status: 200
    end

    def update
        req = CollabRequest.find(params[:id])
        req.update(collab_request_params)
        render json: req, status: :ok
    end

    private
    def collab_request_params
        params.permit(:requester_id,:reciever_id,:accepted)
    end
end
