class AddSpeciesToPets < ActiveRecord::Migration[6.0]
  def change
    add_reference :pets, :species
  end
end
