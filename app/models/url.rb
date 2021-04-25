class Url < ApplicationRecord
  def self.to_csv
    attributes = %w[longUrl shortUrl numberOfClick] # customize columns here
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
