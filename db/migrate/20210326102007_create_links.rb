class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :longUrl
      t.string :shorUrl
      t.string :shotId

      t.timestamps
    end
  end
end
