class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :longUrl
      t.string :shortUrl
      t.string :shortId
      t.numeric :numberOfClick
      t.boolean :pin
      t.timestamps
    end
  end
end
