class CreateCollabs < ActiveRecord::Migration[7.0]
  def change
    create_table :collabs do |t|
      t.references :collaborator_a,null: false, index: true
      t.references :collaborator_b,null: false, index: true
      t.timestamps
    end
  end
end
