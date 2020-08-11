class PetsController < ApplicationController
    before_action :set_pet, only: [:show, :update, :destroy]
    before_action :authorize_request, only: [:create, :update, :destroy, :add_flavor]

     # GET /foods
  def index
    @pets = Pet.all

    render json: @pets
  end

  # GET /foods/1
  def show
    render json: @pet
  end

  # POST /foods
  def create
    @pet = Pet.new(food_params)
    @pet.user = @current_user

    if @pet.save
      render json: @pet, status: :created, location: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @pet.destroy
  end

  # PUT /flavors/1/foods/2
#   def add_flavor
#     @food = Food.find(params[:id])
#     @flavor = Flavor.find(params[:flavor_id])

#     @food.flavors << @flavor

#     render json: @food, include: :flavors
#   end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pet_params
      params.require(:pet).permit(:name, :user_id)
    end
end
