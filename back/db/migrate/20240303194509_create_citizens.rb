class CreateCitizens < ActiveRecord::Migration[6.1]
  def change
    create_table :citizens do |t|
      t.string :full_name
      t.string :cpf
      t.string :cns
      t.string :email
      t.date   :birth_date
      t.string :phone
      t.boolean :status

      t.timestamps
    end
  end
end
