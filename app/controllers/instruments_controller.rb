class InstrumentsController < ApplicationController
    # before_action :authenticate_user

    def index
        @instruments = Instrument.all
        render json: @instruments, status: :ok
    end

    def create
        new_ins = Instrument.create!(inst_params)
        render json: new_ins, status: :created
    end

    def update
        
    end

    def destroy

    end

    private
    def inst_params
        params.permit(:kind,:user_id,:proficiency,:primary)
    end
end
