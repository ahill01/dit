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
        inst = Instrument.find(params[:id])
        inst.update(inst_params)
        render json: inst, status: :ok
    end

    def destroy
        inst = Instrument.find(params[:id])
        inst.destroy
        render json: inst, status: :ok
    end

    private
    def inst_params
        params.permit(:kind,:user_id,:proficiency,:primary)
    end
end
