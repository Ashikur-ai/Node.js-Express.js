const Ticket = require('./Ticket');
const { readFile, writeFile } = require('./utils');

const tickets = Symbol('tickets');

class TicketCollection {
  constructor() {
    this[tickets] = [];
  }


  /**
   * create and save a new ticket
   * @param {string} username 
   * @param {number} price 
   * @returns {Ticket}
   */

  create(username, price) {
    const ticket = new Ticket(username, price);
    this[tickets].push(ticket);
    return tickets;
  }

  /**
   * 
   * @param {string} username 
   * @param {number} price 
   * @param {number} quantity 
   * @returns {Ticket[]}
   */

  createBulk(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++){
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * 
   * @returns all tickets from db
   */
  find() {
    return this[tickets];
  }


  /**
   * Find single ticket by id
   * @param {string} id 
   * @return{Ticket}
   */

  findById(id) {
    const ticket = this(tickets).find(
      /**
       * 
       * @param {Ticket} ticket 
       */

      (ticket) => ticket.id == id
    );
    return ticket;
  }

  /**
   * Find tickets by username
   * @param {string} username 
   * @return{Ticket[]}
   */

  findByUsername(username) {
    const tickets = this[tickets].filter(
      /**
       * 
       * @param {Ticket} ticket 
       */

      (ticket) => ticket.username == username
    );
    return tickets;
  }


  /**
   * 
   * @param {sting} ticketId 
   * @param {username: string, price: number} ticketBody 
   * @returns ticket;
   */

  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    if (ticket) {
      ticket.username = ticketBody.username ?? ticket.username;
      ticket.price = ticketBody.price ?? ticket.price;
    }
    return ticket;
  }

  /**
   * bulk update by user
   * @param {string} username 
   * @param {{username: string, price: number}} ticketBody 
   * @return {Ticket[]}
   */
  updateBulk(username, ticketBody) {
    const userTickets = this.findByUsername(username);
    const updatedTickets = userTickets.map(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => this.updateById(ticket.id, ticketBody)
    );
    return updatedTickets;
  }


  deleteById(ticketId) {
    const index = this[tickets].findIndex(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id == ticketId
    );

    if (index == -1) {
      return false;
    } else {
      this[tickets].splice(index, 1);
      return true;
    }
  }

  /**
   * 
   * @param {*} username 
   * @return {boolean[]}
   */
  deleteBulk(username) {
    const userTickets = this.findByUsername(username);
    const deletedResult = userTickets.map(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => this.deleteById(ticket.id)
    );
    return deletedResult;
  }

  /**
   * 
   * @param {number} winnerCount 
   * @return {Ticket[]}
   */
  draw(winnerCount) {
    const winnerIndexes = new Array(winnerCount)

    let winnerIndex = 0;
    while (winnerIndex < winnerCount) {
      let ticketIndex = Math.floor(Math.random() * this[tickets].length);
      if (!winnerIndexes.includes(ticketIndex)) {
        winnerIndexes[winnerIndex++] = ticketIndex;
        continue;
      }
    }

    const winners = winnerIndexes.map(
      /**
       * 
       * @param {number} index 
       * @returns return
       */
      (index) => this[tickets][index]
    );
    return winners;
      
  }
}

const ticketCollection = new TicketCollection();
module.exports = ticketCollection;