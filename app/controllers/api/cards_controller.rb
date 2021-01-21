class Api::CardsController < ApplicationController

    before_action :require_logged_in, only: [:index, :create, :destroy, :update]

    def index
        @cards = Card.all

        render :index
    end

    def create
        @card = Card.new(card_params)
        if @card.save
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def show
        @card = Card.find_by(id: params[:id])

        if @card
            render :show
        else
            render json: @deck.errors.full_messages, status: 404
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])
        if @card && @card.destroy
            render :index
        else
            render json: ["Card not found"], status: 404
        end
    end

    def update
        @card = Card.find_by(id: params[:id])
        
        if @card && @card.update(card_params)
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end

    end

    private
    def card_params
        params.require(:card).permit(:front_side, :back_side, :deck_id)
    end
end
