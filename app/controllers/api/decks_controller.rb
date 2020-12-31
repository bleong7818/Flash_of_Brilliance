class Api::DecksController < ApplicationController

    before_action :require_logged_in, only: [:index, :create, :destroy, :update]

    def index
        @decks = Deck.all

        render :index
    end

    def create 
        @deck = Deck.new(deck_params)
        
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
        @deck = Deck.find_by(id: params[:id])

        if @deck && @deck.destroy
            render :index
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

    def add_to_user_decks 
        @deck = Deck.find_by(id: params[:id])

        if current_user.decks.find_by(id: params[:id])
            render json: ["Deck is already assigned"]
        else
            current_user.decks << @deck
            render :show
        end
    end

    # def delete_from_user_decks
    #     @deck = Deck.find_by(id: params[:id])
        
        
    # end

    private
    def deck_params
        params.require(:deck).permit(:title, :creator_id)
    end
end
