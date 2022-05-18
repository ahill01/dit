class MessagesController < ApplicationController
    before_action do 
        @conversation = Conversation.find(params[:conversation_id])
    end

    def index
        @messages = @conversation.messages
        if @messages.length >10
            @over_ten = true
            @messages = @messages[-10..-1]
        end
        if params[:m]
            @over_ten = false
            @messages = @conversation.messages
        end
        if @messages.last
            if@messages.last.user_id != current_user.index
            @messages.last.read = true
            end
        end
    @message = @conversation.messages.new
    render json: @messages 
    end

    def new 
        @message = @conversation.messages.new
        render json: @message, status: :ok
    end

    def create
        @message = @conversation.messages.new(message_params)
        if @message.save 
            render json: @conversation, status: :ok
        end
    end

    def read
        message = Message.find(params[:id])
        message.read = true
        render json: message, status: :ok
    end

    private 
    def message_params
        params.require(:message).permit(:body, :user_id)
    end

end
