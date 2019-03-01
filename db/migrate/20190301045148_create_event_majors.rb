class CreateEventMajors < ActiveRecord::Migration[5.2]
  def change
    create_table :event_majors do |t|
      t.references :event, foreign_key: true
      t.references :major, foreign_key: true

      t.timestamps
    end
  end
end
