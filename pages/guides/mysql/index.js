/**
 * Guides - Linting
 *
 * @todo Create a code highlight segment
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Heading } from 'industry-ui'

export default () => {
  const meta = {
    description: `
      DryKISS prefers using a relational database over document storage, simply
      becuase its easier to maintain, faster to prototype and in our opinion more
      resilient.
    `,
    path: '/guides/mysql',
    title: 'MySQL Best Practice for Installing and Running on MacOS'
  }

  return (
    <Page heading='MySQL Best Practices' meta={meta}>

      <Heading content='Installation' tag='h2' />

      <pre>$ brew info mysql</pre>
      <pre>$ brew install mysql</pre>

      <p>
          To start the MySQL run:
      </p>

      <pre>$ mysql.server start</pre>
      <pre>mysql.server `start|stop|restart|reload|force-reload|status`</pre>

      <p>
          Or to start it as a service when the computer starts run:
      </p>

      <pre>$ brew services start mysql</pre>

      <p>
          This will install MySQL without a root passwoord.
        <br />- u: root
        <br />- p: -
      </p>

      <p>
          To setup a secure installation run:
      </p>

      <pre>$ mysql_secure_installation</pre>

      <p>
          MySQL is configured to only allow connections from localhost by
          default, to connect run:
      </p>

      <pre>$ mysql -uroot</pre>

      <p>
          Type quit or exit to return to the command prompt.
      </p>

      <Heading content='GUI' tag='h2' />

      <p>
          Sequel Pro is a Free and open source MySQL GUI, however this does not
          currently support MySQL 8. Since we should use the latest MySQL has to
          offer the
      </p>

      <pre>$ brew cask install sequel-pro</pre>

      <p>
          MySQL Workbench is the official GUI for MySQL, probably not as
          intuitive to use as Sequel Pro, but it will connect to the last MySQL version.
      </p>

      <pre>$ brew cask install sequel-pro</pre>

      <Heading content='ORM' tag='h2' />

      <p>
          Sequelize
      </p>

        MYSQL FAILS

killall -9 mysqld

Please see - https://help.ubuntu.com/community/ApacheMySQLPHP

02. Check that it is running

    $ sudo netstat -tap | grep mysql

03. To stop / start or restart use the following command

    $ sudo service mysql restart
    $ sudo service mysql start
    $ sudo service mysql stop

05. The Data Directory should be placed onto the attached EBS Storage Stop the MySQL

    $ sudo service mysql stop

    $ sudo mkdir /data/mysql/etc /data/mysql/lib /data/mysql/log

    $ sudo mv /etc/mysql     /data/mysql/etc/
    $ sudo mv /var/lib/mysql /data/mysql/lib/
    $ sudo mv /var/log/mysql /data/mysql/log/

    OR

    $ sudo rm -R /etc/mysql
    $ sudo rm -R /var/lib/mysql
    $ sudo rm -R /var/log/mysql

    ----

    $ sudo mkdir /etc/mysql
    $ sudo mkdir /var/lib/mysql
    $ sudo mkdir /var/log/mysql

    $ echo "/data/mysql/etc/mysql /etc/mysql none bind" | sudo tee -a /etc/fstab
    $ sudo mount /etc/mysql

    $ echo "/data/mysql/lib/mysql /var/lib/mysql none bind" | sudo tee -a /etc/fstab
    $ sudo mount /var/lib/mysql

    $ echo "/data/mysql/log/mysql /var/log/mysql none bind" | sudo tee -a /etc/fstab
    $ sudo mount /var/log/mysql

    $ sudo service mysql start

06. Copy data directory to the main folder

    $ sudo mv /datadold/mysql/data/wiki_triangle/ /data/mysql/lib/mysql
    $ chown -R mysql:mysql wiki_triangle

07. Optimise MySQL

Edit the cnf file.

    $ sudo nano /data/mysql/etc/mysql/my.cnf

    mysql -u root -p

    SHOW VARIABLES LIKE 'character_set%';
    SHOW STATUS;

    InnoDB Tuning

    innodb_buffer_pool_size
    innodb_log_file_size
    innodb_log_buffer_size
    innodb_flush_log_at_trx_commit=2
    innodb_thread_concurrency
    innodb_flush_method
    innodb_file_per_table

    # Set up UTF8 System by setting character sets
    # Set up InnoDB a bit better
      Extend Data Pool to 2GB
      Increase Pool Size to 1G

[client]

default-character-set = utf8
default-collation     = utf8_unicode_ci
port                  = 3306
socket                = /var/run/mysqld/mysqld.sock

[mysqld_safe]

socket  = /var/run/mysqld/mysqld.sock
nice    = 0

[mysqld]

basedir              = /usr
bind-address         = 127.0.0.1
character_set_server = utf8
character_set_client = utf8
default-collation    = utf8_unicode_ci
datadir              = /var/lib/mysql

#skip-innodb
#innodb_buffer_pool_size         = 512M
#innodb_additional_mem_pool_size = 10M

user                 = mysql
socket               = /var/run/mysqld/mysqld.sock
port                 = 3306
tmpdir               = /tmp

key_buffer              = 128M
read_buffer_size        = 1M
sort_buffer_size        = 1M
join_buffer_size        = 1M
read_rnd_buffer_size    = 768K

max_allowed_packet      = 16M
max_connections         = 200
myisam-recover          = BACKUP
table_cache             = 512
thread_stack            = 192K
thread_cache_size       = 128
thread_concurrency      = 2

query_cache_limit       = 1M
query_cache_size        = 32M

skip-external-locking

[mysqldump]

quick
quote-names
max_allowed_packet      = 16M

[mysql]

default-collation     = utf8_unicode_ci
default-character-set = utf8

[isamchk]

key_buffer              = 16M

!includedir /etc/mysql/conf.d/

    </Page>
  )
}
