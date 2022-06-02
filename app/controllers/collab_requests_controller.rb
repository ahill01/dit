class CollabRequestsController < ApplicationController

    def index
        if params.include?(:user_id) then
            pending_req = CollabRequest.where("requester_id = ? and accepted = ?",params[:user_id],false)
            rec_requests = CollabRequest.where("reciever_id = ? and accepted = ?",params[:user_id],false)
            all_requests = {recieved:rec_requests,pending:pending_req}
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
            rec_requests = CollabRequest.where("reciever_id = ? and accepted = ?",params[:user_id],false)
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
