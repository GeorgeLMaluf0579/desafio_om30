# frozen_string_literal: true

if defined?(Searchkick)
  Searchkick.client_options = {
    transport_options: {
      ssl: {
        verify: false,
      },
    },
  }
end