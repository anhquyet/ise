class CreateGrade < ActiveRecord::Migration[5.2]
  def change
    create_table :grades do |t|
      t.string :name
      t.float :weight
      t.float :value
      t.references :grade_category, foreign_key: true

      t.timestamps
    end
  end
end
