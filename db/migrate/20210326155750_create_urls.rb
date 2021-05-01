# frozen_string_literal: true

class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :long_url
      t.string :short_url
      t.string :short_id
      t.numeric :number_of_click
      t.boolean :pin
      t.timestamps
    end
  end
end
