class Api::DecksController < ApplicationController

    before_action :require_logged_in, only: [:index, :create, :destroy, :update]

    def index
        @decks = Deck.all
        render :index
    end

    def create 

        @deck = Deck.new(deck_params)
        @deck.creator_id = current_user.id
        debugger
        if @deck.save
            render :show
        else
            render json: @deck.errors.full_messages, status: 422

        end
    end

    def show
        @deck = Deck.find_by(id: params[:id])

        if @deck 
            render :show
        else
            render json: @deck.errors.full_messages, status: 404
        end
    end


    def destroy 
        @deck = current_user.decks.find_by(id: params[:id])

        if @goal && @goal.destroy
            render "api/users/show"
        else
            render json: ["Deck not found"], status: 404
        end
    end

    def update
        @deck = Deck.find_by(id: params[:id])

        if @deck && @deck.update
            render :show
        else
            render json: ["Deck not found"], status: 404
        end
    end

    private
    def deck_params
        params.require(:deck).permit(:title, :creator_id)
    end
end
