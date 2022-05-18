class ConversationsController < ApplicationController
    before_action :authenticate_user

    def index
        @users = User.all 
        @conversations = Conversation.all 
    end

    def create 
        if Conversation.between(params[:sender_id],params[:recipient_id]).present?
            @conversation = Conversation.between(params[:sender_id],params[:recipient_id]).first
        else
            @conversation = Conversation.create!(conversation_params)
        end
    render json: @conversation, status: :ok
    end

    def user_index
        conversations = Conversation.where(sender_id:params[:user_id]).or(Conversation.where(recipient_id:params[:user_id]))
        render json: conversations, status: :ok
    end

    private
    def conversation_params
        params.permit(:sender_id,:recipient_id)
    end

end
