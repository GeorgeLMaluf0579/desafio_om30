class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string  :street
      t.string  :building_number
      t.string  :neighborhood
      t.string  :complement
      t.string  :zip_code
      t.string  :city
      t.string  :state
      t.string  :ibge_code
      t.references :citizen, null: false, index: true, foreign_key: {on_delete: :cascade}

      t.timestamps
    end
  end
end
