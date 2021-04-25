class Url < ApplicationRecord
  def self.to_csv
    attributes = %w[long_url short_url number_of_click] # customize columns here
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |url|
        csv << attributes.map do |attr|
          url.send(attr)
        end
      end
    end
  end
end
