# frozen_string_literal: true

json.extract! url, :id, :long_url, :short_url, :short_id, :number_of_click, :pin, :created_at, :updated_at
json.url url_url(url, format: :json)
