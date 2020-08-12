class SpeciesController < ApplicationController
    # GET /species
    def index 
        @species = Species.all 

        render json: @species
    end
end
