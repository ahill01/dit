class CreateInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :instruments do |t|
      t.string :kind
      t.references :user, null: false, foreign_key: true
      t.string :proficiency, :default => "beginner"
      t.boolean :primary, :default => false

      t.timestamps
    end
  end
end
