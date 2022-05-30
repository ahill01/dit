class MessagesController < ApplicationController
    before_action do 
        @conversation = Conversation.find(params[:conversation_id])
    end

    def index
        @messages = @conversation.messages
        render json: @messages, status: :ok
    end

    def delete 
        delete_message = Message.find(params[:id])
        delete_message.destroy
        render json: delete_message, status: :ok
    end
    # def new 
    #     @message = @conversation.messages.new
    #     render json: @message, status: :ok
    # end

    def create
       new_message = Message.create!(message_params)
       render json: new_message, status: :created
    end

    def read
        message = Message.find(params[:id])
        message.read = true
        render json: message, status: :ok
    end

    private 
    def message_params
        params.require(:message).permit(:body, :user_id,:conversation_id)
    end

end
