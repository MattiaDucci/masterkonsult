FROM jekyll/jekyll
# Copy only Gemfile and Gemfile.lock to application folder
COPY --chown=jekyll:jekyll Gemfile* /srv/jekyll/
COPY --chown=jekyll:jekyll *.gemspec /srv/jekyll/

# Set current directory
WORKDIR /srv/jekyll

# Install gems with bundle
RUN bundle install

